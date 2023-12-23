import Button from "./Button";
import { useState } from "react";

function FormSplitBills({ selectedFriend,onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSplitSubmit(e){
    if(!bill || !paidByFriend) return
    onSplitBill( whoIsPaying === 'user' ? paidByFriend : -paidByUser)
  }

  return (
    <>
      <form action="" className="form-split-bill" onSubmit={handleSplitSubmit}>
        <h2>Split a bills with your {selectedFriend.name}</h2>

        <label>💷Bill Value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>💸Your Expences</label>
        <input
          type="text"
          value={paidByUser}
          onChange={(e) => setPaidByUser(
            Number(e.target.value)> bill ? paidByUser :
            Number(e.target.value)
            )}
        />

        <label>💴{selectedFriend.name} Expences</label>
        <input
          type="text"
          disabled
          value={paidByFriend}
        />

        <label>😜Who is paying bill</label>
        <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <br />
        <Button>Split Bill</Button>
      </form>
    </>
  );
}

export default FormSplitBills;
