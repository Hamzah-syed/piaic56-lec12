"use client";
import { createClient } from "@/utils/supabase/client";
import React from "react";

const Form = () => {
  const handleSubmit = async () => {
    const supabase = createClient();
    const { data, error, status } = await supabase.from("products").insert([
      {
        name: "Jacket",
        price: 100,
      },
    ]);
  };
  return (
    <div>
      <button onClick={handleSubmit}>ADD Product</button>
    </div>
  );
};

export default Form;
