import React from 'react';

const Blog = () => {
    return (
        <div>
            <div tabIndex="0" className="collapse collapse-open border border-base-300 bg-base-100 rounded-box container mx-auto mt-5"> 
                <div className="collapse-title text-xl font-medium">
                What is the difference between Authentication and Authorization?
                </div>
                <div className="collapse-content"> 
                    <p>Authentication and authorization both are different subjects but they are related to security. Authentication and authorization accomplish these same goals. 
                        Authentication is the act of validating that users are who they claim to be. This is the first step in any security process. 
                        Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.

                        Authentication is the first step of a good identity and access management process. Authorization always takes place after authentication.
                        Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.
                        Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-open border border-base-300 bg-base-100 rounded-box container mx-auto mt-5"> 
                <div className="collapse-title text-xl font-medium">
                Why are you using firebase?
                </div>
                <div className="collapse-content"> 
                    <p>Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android, utility, and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, and creating marketing and product experiment.

                        Authentication Firebase Authentication makes it easy for developers to build secure authentication systems and enhances the sign-in and onboarding experience for users. This feature offers a complete identity solution, supporting email and password accounts, phone auth, as well as Google, Facebook, GitHub, Twitter login, and more..</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-open border border-base-300 bg-base-100 rounded-box container mx-auto my-5"> 
                <div className="collapse-title text-xl font-medium">
                What other options do you have to implement authentication?
                </div>
                <div className="collapse-content"> 
                    <p>Here are ten of the best alternatives to Firebase.
                        1: Back4App
                        Back4app is a reliable Firebase alternative that works with an amalgamation of open-source technologies. The platform is straightforward to use and has a low learning curve. 

                        2: Parse
                        Parse is a comprehensive application stack that will help you build applications faster. It is an open-source backend framework that is free to use and download. It is a terrific free Firebase alternative.

                        3: AWS Amplify
                        AWS Amplify allows web and mobile developers to create full-stack applications with a set o fit-to-purpose tools and features. 
                        4: Backendless
                        Backendless is a visual application development platform. It has been operating since 2012, and it is one of the first Backend as Service solutions launched. 

                        5: Kuzzle
                        Kuzzle recently updated its website and now offers two different products. The first one is an IoT suite designed to streamline the deployment of IoT applications. The second one is a backend to facilitate the development of web and mobile applications.  

                        6: Supabase
                        Supabase allows developers to build a backend in less than 2 minutes. It is an excellent Firebase alternative that works with open-source technologies and enables you to host an app on a self-host environment or directly with the Supabase cloud.

                        7: appwrite
                        Appwrite is a backend server for Flutter, Mobile, and Web developers. It is open-source, secure, and provides a self-hosting solution that is easy to use. It is a great open-source Firebase alternative.

                        8: Hasura
                        Hasura is another excellent open-source alternative to Firebase. It provides a GraphQL engine that allows creation of apps and APIs up to ten times faster than traditional development. 

                        9: Nhost
                        NHost is another open-source option for Firebase. The platform works with an amalgamation of open-source technologies, including GraphQL, Postgres, and Hasura.

                        10: Deployd
                        Deployd is an effective open-source deployment and API design platform that empowers you to build web and mobile applications without hassles.</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-open border border-base-300 bg-base-100 rounded-box container mx-auto my-5"> 
                <div className="collapse-title text-xl font-medium">
                What other services does firebase provide other than authentication?
                </div>
                <div className="collapse-content"> 
                    <p>Firebase provides too many services without authentication.  There are given below:-

                    (1) Cloud Firestore.
                    (2)  Cloud Functions.
                    (3)  Authentication.
                    (4)   Hosting.
                    (5)  Cloud Storage.
                    (6)  Google Analytics.
                    (7)  Predictions.
                    (8)  Cloud Messaging.
                    (9)  Dynamic Links.
                    (10)  Remote Config.

                    Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. </p>
                </div>
            </div>
            </div>
    );
};

export default Blog;