import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    // test('debe hacer match con el snpashot', () => {

    //     const title = "Hola, Soy Goku"
    //     // rendereiza el componente en memoria
    //     const { container} = render(<FirstApp title={title} />);

    //     // console.log(container);
    //     expect(container).toMatchSnapshot();

    // })

    test('debe mostrar el título en h1', () => {
        const title = "Hola, Soy Goku"
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // // console.log(h1.innerHTML);
        // expect(h1.innerHTML).toBe(title);
        // // lo que contiene
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);
    })

    test('debe mostrar el subtítulo enviado por props', () => {
        const title = "Hola, Soy Goku"
        const subTitle = "Soy un subtítulo"
        const { getAllByText } = render(
            <FirstApp 
                title={title} 
                subTitle={subTitle} 
            />);

        expect(getAllByText(subTitle).length).toBe(2);
    })


})