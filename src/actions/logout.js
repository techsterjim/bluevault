import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";
export async function logoutAction() {
  //delete the user from local storage
  deleteItem({ key: "userName" });

  deleteItem({ key: "budgets" });

  deleteItem({ key: "expenses" });

  toast.warn("You've successfully logged out. Have a great day!", {
   theme: "dark",
   icon: "💰"
  }
  );

  //return redirect ("/");
  return redirect("/");
}
