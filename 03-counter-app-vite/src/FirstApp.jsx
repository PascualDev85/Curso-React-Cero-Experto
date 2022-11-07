import PropTypes  from 'prop-types';


// Regla si no se cambia este valor se saca fuera y no tiene relación con algún 
//Hook o depencia


// const newMessage = {
//     message: 'Hola Mundo',
//     nombre: 'David'
// };

const getREsult = (a, b) => {
    return a + b;
}

export const FirstApp = ( {title, subTitle, name} ) => {
    // LAS PROPOS SE PUEDEN PASAR DEL COMPONENTE PADRE A SUS HIJOS
    // console.log(props);
  
    
  return (
    <>
    {/* Agrupadro de etiquets de jsx */}
        <h1 data-testid="test-title">{title}</h1>
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        {/* Para poder imprimir un objeto */}
        <hr />
        <p>{subTitle}</p>
        <p>{subTitle}</p>
        <p>{name}</p> 
    </>
  )
}

// SE COLOCAN AL FINAL
// sirven para poder definr por defecto las props
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

// Los defaultProps van a entrar antes que los propTypes por tanto no saldrá error, a no ser que se envie props diferentes tipos del que se marcó.
FirstApp.defaultProps = {
    name: 'David Pascual',
    title: 'No hay título',
    subTitle: 'No hay subTitle',
}