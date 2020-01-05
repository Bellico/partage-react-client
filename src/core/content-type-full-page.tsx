import React from 'react';
// import { Header } from './header';
// import { ContentTypesList } from './content-types-list';
// import { Footer } from './footer';
// import { useParams } from 'react-router-dom';

// export const ContentTypeFullPage: FunctionComponent = () => {


//     //  const id = useParams();


//     const id = useParams();
//     console.log(id);

//     return (<>

//         <Footer />
//     </>);

// }

export class ContentTypeFullPage extends React.Component<any> {

    componentDidMount() {
        console.log(this.context);
        const { match } = this.props;
        console.log(match);

    }
    render() {
        return <h1>Gello</h1>
    }
}
