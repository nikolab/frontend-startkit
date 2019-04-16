import logo from './logo.png';
const a = {
  textDecoration: 'none',
}

export default {
  flex: {
    flex: 1,
  },

  menu: {
    width: 200,
  },

  a: {
    ...a,
  },

  login: {
    ...a,
    color: 'white',
  },

  logo: {
    backgroundImage: `url(${logo})`,
    width: 60,
    height: 60,
  },

  link: {
      textDecoration: 'none',
      color: '#fff',
  }
}
