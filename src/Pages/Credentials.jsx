import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../utils/Layout";
import { CircularProgress } from "@mui/material";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import CredentialCard from "../Partials/CredentialCard";
import AddCredentials from "../Partials/AddCredentials";

export default function Credentials() {
  const { user } = useAuthenticator((context) => [context.user]);
  const client = generateClient();

  const [credentials, setCredentials] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCredentials();
  }, []);

  const getCredentials = async () => {
    setLoading(true);
    const res = await client.graphql({
      query: queries.listCredentials,
      variables: {
        filter: {
          user: {
            eq: user.userId,
          },
        },
      },
    });
    console.log(res);
    setCredentials(res.data.listCredentials.items);
    setLoading(false);
  };

  const deleteCredential = async (id) => {
    setLoading(true);
    const res = await client.graphql({
        query: mutations.deleteCredentials,
        variables: {
            input: {
                id: id
            }
        }
    });
    await getCredentials();
  }

  const createCredentials = async (username, password, resort) => {
    // Check to see if they already have a cred for this resort
    if (credentials.map(x => x.resort).includes(resort.toUpperCase())){
        window.alert("You already have a credential set for this resort");
        return;
    }
    const res = await client.graphql({
        query: mutations.createCredentials,
        variables: {
            input: {
                username: username,
                password: password,
                resort: resort.toUpperCase(),
                user: user.userId

            }
        }
    });
    console.log(res);
    await getCredentials();
  }

  const editCredential = async (id, username, password) => {
    setLoading(true);
    const res = await client.graphql({
        query: mutations.updateCredentials,
        variables: {
            input: {
                id: id,
                username: username,
                password: password,
            }
        }
    });
    await getCredentials();
  }

  return (
    <Layout pageName="Credentials">
      <div className="flex flex-col p-4 items-center gap-4">
        <h1>Manage Passwords for Your Resort Parking Accounts</h1>
        {loading ? (
          <div className="w-full flex flex-col mt-4 items-center">
            <CircularProgress />
          </div>
        ) : (
          <div className="w-11/12 max-w-2xl">
              <div className="w-full flex flex-col gap-3">
                {
                    credentials.map((cred, i) => (
                        <CredentialCard
                        data={cred}
                        deleteCred={deleteCredential}
                        editCred={editCredential}
                        key={i}
                        />
                    ))
                }
              </div>
          </div>
        )}

        <div>
            <AddCredentials createCredentials={createCredentials}/>
        </div>

        <div className="text-xs text-gray-400 italic max-w-md">
          Disclaimer: these passwords are stored in plain-text in an AWS
          DynamoDB table. I am the only one who has access to this. So, just,
          FYI, they are not hashed.
        </div>
      </div>
    </Layout>
  );
}
