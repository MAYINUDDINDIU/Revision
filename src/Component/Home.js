import React from 'react';


const Home = ({ product }) => {

    const { title, price, image, category, id } = product;


    const users = [
        {
            name: "MAYIN UDDIN",
            age: '24',

            phones: [
                {
                    home: '01999070234',
                    office: '018145678'
                }

            ]
        },
        {
            name: "Sakib al hasan",
            age: '24',

            phones: [
                {
                    home: '01452354234',
                    office: '0171232425'
                }

            ]
        }


    ]

    return (
        <div>
            <h1>{id}</h1>
            <h3>{title}</h3>
            <h6>{price}</h6>
            <img src={image} alt="" />
            <h6>{category}</h6>


            <div>
                <h1>Nested List</h1>

                {
                    users.map((user, index) => <article key={index}>
                        <h3>{user.name}</h3>
                        <h3>{user.age}</h3>

                        {
                            user.phones.map((phone, index) => <div key={index}>

                                <h3>{phone.home}</h3>
                                <h3>{phone.office}</h3>
                            </div>)
                        }
                    </article>)
                }
            </div>


        </div>
    );
};

export default Home;