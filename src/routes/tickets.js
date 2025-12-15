export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: (req, res) => {
      return res.end("criado com sucesso");
    }
  }
];