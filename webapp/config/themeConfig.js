const actionColor1 = 'rgb(0, 255, 224)';

export default {
  button: {
    backgroundColor: 'transparent',
    border: `1px solid ${actionColor1}`,
    borderRadius: '5px',
    color: actionColor1
  },
  header: {
    h1: {
      fontSize: '48px'
    },
    h2: {
      fontSize: '36px'
    },
    h3: {
      fontSize: '24px'
    },
    h4: {
      fontSize: '16px'
    },
    h5: {
      fontSize: '12px'
    },
    h6: {
      fontSize: '10px'
    }
  },
  link: {
    color: '#00ffe0',
    textDecoration: 'underline'
  },
  table: {
    container: {
      border: '1px solid rgba(255, 255, 255, 0.15)'
    },
    header: {
      textTransform: 'capitalize',
      fontWeight: 500
    },
    body: { fontWeight: 100 },
    row: ({ index }) => {
      const style = { fontWeight: 100 };
      if (index === -1) {
        style.backgroundColor = 'rgba(0, 255, 224, .2)';
      } else if (index % 2 === 0 || index === 0) {
        style.backgroundColor = 'rgba(0, 0, 0, 0)';
      } else {
        style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      }
      return style;
    }
  },
  text: {
    span: {},
    p: {},
    strong: {}
  }
};
