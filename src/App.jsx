function App() {

  return (
    <>
    <Header/>
     <div className="profile-card">
        <h1 className="profile-name">{datas.grupName}</h1>
        <h2 className="profile-member">Member Data</h2>
        <p className="profile-name">{datas.member.name}</p>
        <p className="profile-born">{datas.member.born}</p>
        <p className="profile-age">{datas.member.age}</p>

        <h2 className="Group Member"></h2>
        <ul className="profile-list">
            {datas.grupMembers.map((data) => <li key={data}>{data}</li>)}
            
        </ul>
    </div>
    </>
  );
}


const datas = {
  grupName: "React Nebula",
  member: {
    name:"Hanif Fauzan Nurrahman",
    born:"Bandung, 18-04-2004",
    age:"20",
  },
  grupMembers: ["Hanif","Salim","Fadillah","Hilwa","Raksa","Imran","Anwar","Riri"],
};

export default App
