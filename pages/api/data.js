const data = {
  name: 'Juan Fernando',
  lastName: 'Larrotta',
}

export default function handler(req, res) {
  res.status(200).json(data)
}
