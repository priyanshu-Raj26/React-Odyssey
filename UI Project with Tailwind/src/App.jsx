import Section1 from "./Components/Page-1/Page1";
import Section2 from "./Components/Page-2/Page2";

function App() {
  const users = [
    {
      img: "https://i.pinimg.com/736x/17/6c/dd/176cdd28feb04c08c330bc5d2a3dc715.jpg",
      intro:
        "Customers happy with their current bank and loyal to familiar services.",
      color: "royalblue",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1773332598414-44a45e364d85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "People with limited access to quality financial products and personalised support.",
      color: "lightseagreen",
      tag: "Underserved",
    },
    {
      img: "https://i.pinimg.com/736x/1b/54/7b/1b547bc0640ab730c3ba5ff99121b7f9.jpg",
      intro:
        "Individuals who hold an account but rarely use credit, savings, or insurance.",
      color: "grey",
      tag: "Underbanked",
    },
    {
      img: "https://i.pinimg.com/736x/09/b1/ce/09b1ce05277796b14fac286e4fe81c94.jpg",
      intro:
        "Tech-savvy users who prefer fast, mobile-first banking over branch visits.",
      color: "pink",
      tag: "Digital Natives",
    },
    {
      img: "https://i.pinimg.com/1200x/08/f0/46/08f0467401dee8e2edd86e129be86d86.jpg",
      intro:
        "Freelancers and small business owners needing flexible payments and quick credit.",
      color: "black",
      tag: "Entrepreneurs",
    },
    {
      img: "https://i.pinimg.com/1200x/29/4c/e2/294ce244da19775f9f08ee36ba3a1cf6.jpg",
      intro:
        "Early-career professionals building savings habits and a first credit history.",
      color: "teal",
      tag: "Young Earners",
    },
  ];

  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  );
}

export default App;
