const info = {
  cafeteria: {
    title: 'Cafetería',
    description: 'Espacio donde se venden alimentos y bebidas. Puedes agregar aquí los horarios y menús cuando los tengas.'
  },
  biblioteca: {
    title: 'Biblioteca',
    description: 'Incluye también oficinas de dirección y servicios escolares. Agrega horarios o personal encargado cuando tengas la info.'
  },
  computo: {
    title: 'Centro de Cómputo',
    description: 'Equipado con computadoras y acceso a internet. Aquí puedes añadir más detalles después.'
  }
};

function openModal(key) {
  document.getElementById('modal-title').innerText = info[key].title;
  document.getElementById('modal-description').innerText = info[key].description;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}