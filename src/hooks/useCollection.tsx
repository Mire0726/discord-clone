import React, { useEffect, useState } from "react";
// import { useAppSelector } from "../../app/hooks";
import {
  onSnapshot,
  collection,
  Query,
  DocumentData,
  CollectionReference,
  query,
} from "firebase/firestore";
import db from "../firebase";
interface Channals {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channals[]>([]);

  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channals[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResults);
    });
  }, []);
  return {documents};
};

export default useCollection;
