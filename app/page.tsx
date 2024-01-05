"use client";
import { Button, Input, Typography } from "@mui/material";
import { useState } from "react";
import serverSubmit from "@/scripts/serverSubmit";

function App() {
  const [currentProccesState, setCurrentProccesState] =
    useState("Процесс не начат");

  return (
    <main className="flex items-center justify-center flex-col min-h-full">
      <form
        className="my-10 flex items-center justify-center flex-col gap-7"
        action={async (data) => {
          setCurrentProccesState("процесс начался");
          const statusResponce = await serverSubmit(data);
          setCurrentProccesState(statusResponce);
        }}
      >
        <Typography variant="h4">Данные для начала автолайка:</Typography>
        <Input placeholder="Логин" required name="login" />
        <Input placeholder="Пароль" required name="password" />
        <Input placeholder="Хештег. Без #" required name="tag" />
        <Button type="submit" variant="outlined">
          Начать
        </Button>
      </form>
      <Typography>{currentProccesState}</Typography>
    </main>
  );
}

export default App;
