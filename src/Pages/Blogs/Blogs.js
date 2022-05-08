import React from 'react';

const Blogs = () => {
    return (
        <div className='container question my-5'>
            <h2 className="text-center fw-bold my-5 faq">Frequently Asked Questions</h2>

            <div id="accordionExample">
                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            Difference between javascript and nodejs?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5 fw-light">
                            <strong><b>Javascript:</b> <br></br>
                                i. Javascript is a programming language that is used for writing scripts on the website.<br></br>

                                ii. Javascript is used in frontend development.<br></br>

                                iii. Javascript can only be run in the browsers.<br></br>

                                iv. It is basically used on the client-side.<br></br>
                                v. Some of the javascript frameworks are RamdaJS, TypedJS, etc.<br></br>
                                <br />

                                <b>Nodejs:</b> <br></br>
                                i. NodeJS is a Javascript runtime environment.<br></br>

                                ii. We can run Javascript outside the browser with the help of NodeJS.<br></br>

                                iii. It is mostly used on the server-side.<br></br>

                                iv. Nodejs does not have capability to add HTML tags.<br></br>

                                v. Nodejs is used in server-side development.<br></br> </strong><br></br>
                        </div>
                    </div>
                </div>


                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            When should you use nodejs and when should you use mongodb?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5 fw-light">
                            <strong>we should use node js When we need to send updates to the user in real-time.Because When we use Node.js, the server has no need of maintaining separate threads for each open connection.
                                When we need require less management. When we need automatic repair, easier data distribution, and simpler data models make administration.</strong><br></br>
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            Differences between sql and nosql databases.?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5 fw-light">
                            <strong><b>Javascript:</b> <br></br>
                                i. SQL databases are relational, NoSQL databases are non-relational. <br></br>

                                ii. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.<br></br>

                                iii. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br></br>

                                iv. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.<br></br>

                                v. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                                <br /></strong>
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            What is the purpose of jwt and how does it work?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5 fw-light">
                            <strong>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                                Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                            </strong>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Blogs;