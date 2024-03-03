import React from "react";
import Address from "./Address";
import Sections from "./Sections";
import Search from "./Search";
import DataTable from "./Datatable";

const data = [
  {
    id: 1,
    title: "All Events",
    size: "1.5MB",
    author: "john wick",
    date: "12/12/2022 11:22pm",
    version: "0.1.2.4",
    workflow: "Revision",
    authorImgSrc:
      "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Meetings",
    size: "290KB",
    author: "Alex smith",
    date: "12/12/2022 11:22pm",
    version: "0.1.2.4",
    workflow: "-",
    authorImgSrc:
      "https://images.unsplash.com/photo-1569931727734-b0c1138bfd87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3NlJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "New Folder",
    size: "2.6MB",
    author: "Annie Bisson",
    date: "12/12/2022 11:22pm",
    version: "0.1.2.4",
    workflow: "-",
    authorImgSrc:
      "https://images.unsplash.com/photo-1619253690154-d275458c650e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3NlJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "All Events",
    size: "1.5MB",
    author: "john wick",
    date: "12/12/2022 11:22pm",
    version: "0.1.2.4",
    workflow: "-",
    authorImgSrc:
      "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    title: "Meetings",
    size: "290KB",
    author: "Alex smith",
    date: "12/12/2022 11:22pm",
    version: "0.1.2.4",
    workflow: "-",
    authorImgSrc:
      "https://images.unsplash.com/photo-1569931727734-b0c1138bfd87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3NlJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "New Folder",
    size: "2.6MB",
    author: "Annie Bisson",
    date: "12/12/2022 11:22pm",
    version: "0.1.2.4",
    workflow: "Revision",
    authorImgSrc:
      "https://images.unsplash.com/photo-1619253690154-d275458c650e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3NlJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    title: "All Events",
    size: "1.5MB",
    author: "john wick",
    date: "12/12/2022 11:22pm",
    version: "0.1.2.4",
    workflow: "Revision",
    authorImgSrc:
      "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    title: "Meetings",
    size: "290KB",
    author: "Alex smith",
    date: "12/12/2022 11:22pm",
    version: "0.1.2.4",
    workflow: "Revision",
    authorImgSrc:
      "https://images.unsplash.com/photo-1569931727734-b0c1138bfd87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3NlJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    title: "New Folder",
    size: "2.6MB",
    author: "Annie Bisson",
    date: "12/12/2022 11:22pm",
    version: "0.1.2.4",
    workflow: "-",
    authorImgSrc:
      "https://images.unsplash.com/photo-1619253690154-d275458c650e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3NlJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D",
  },
];

export default function Files() {
  return (
    <main>
      <Address />
      <Sections />
      <Search />
      <DataTable data={data} />
    </main>
  );
}
