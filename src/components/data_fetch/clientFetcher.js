import { useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const ClientFetcher = ({ onClientsFetched }) => {
    useEffect(() => {
        const fetchData = async () => {
            console.log("Client Fetcher");
            try {
                // Fetch the physiotherapist referral code from the database
                const physiotherapistRef = collection(db, "physiotherapist");
                const physiotherapistSnapshot = await getDocs(
                    physiotherapistRef
                );
                const physiotherapistData =
                    physiotherapistSnapshot.docs[0].data();

                // Fetch all users with the same referral code
                const usersRef = collection(db, "Users");
                const q = query(
                    usersRef,
                    where(
                        "referralCode",
                        "==",
                        physiotherapistData.referralCode
                    )
                );
                const querySnapshot = await getDocs(q);

                // Store the user data in the state of the parent component
                const userDataList = querySnapshot.docs.map((doc) =>
                    doc.data()
                );
                onClientsFetched(userDataList);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // Call the function to retrieve data
        fetchData();
    }, []);

    return null;
};

export default ClientFetcher;
