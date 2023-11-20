export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img||"https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },

];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
 
  
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 80,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 90,
  },
  {
    field: "slotNumbers",
    headerName: "Slot Info",
    width: 350,
    
    renderCell: (params) => (
      <ul className="flex">
        {params.value.map((a, index) => (
          <li key={index}>{a._id}</li>

        ))}
      </ul>
    ),
    type: 'string',
  },
  
  
];


export const contactColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "ph",
    headerName: "Phone Number",
    width: 200,
  },
  
];