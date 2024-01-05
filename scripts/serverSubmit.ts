"use server";
import bot from "./bot";

const serverSubmit = async (formData: FormData) => {
  const login = formData.get("login") as string;
  const password = formData.get("password") as string;
  const tag = formData.get("tag") as string;

  const res = await bot(login, password, tag);
  return res;
};

export default serverSubmit;
