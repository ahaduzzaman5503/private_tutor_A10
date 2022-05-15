import React from 'react';

const NotFound = () => {
    return (
        <div className='container mx-auto bg-current py-20' >
            <section className="notFound py-10">
                <div className="img flex items-center justify-center">
                <img className='pageText h-3/4 ml-5	 w-2/4' src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
                <img className='pageImag h-3/4	rounded-lg mr-5 w-2/4' src=" https://s.tmimgcdn.com/scr/1200x750/122600/error-page-not-found-illustration_122693-original.jpg" alt="El Delorean"/>
                </div>
            </section>
        </div>
    );
};

export default NotFound;