import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Problem2() {
    const [showModalC, setShowModalC] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [usContacts, setUsContacts] = useState([]);
    // const [filteredContacts, setFilteredContacts] = useState([]);
    // const [searchText, setSearchText] = useState("");
    // const [onlyEven, setOnlyEven] = useState(false);

    useEffect(() => {
        fetch("https://contact.mediusware.com/api/contacts/")
            .then((response) => response.json())
            .then((data) => {
                setContacts(data.results);
                console.log(data.results);
            })
            .catch((error) => {
                console.error("Error fetching contacts:", error);
            });
    }, []);

    useEffect(() => {
        fetch(
            "https://contact.mediusware.com/api/country-contacts/United%20States/"
        )
            .then((response) => response.json())
            .then((data) => {
                setUsContacts(data.results);
            })
            .catch((error) => {
                console.error("Error fetching contacts:", error);
            });
    }, []);

    // useEffect(() => {
    //     let filtered = contacts;

    //     if (onlyEven) {
    //         filtered = filtered.filter((contact) => contact.id % 2 === 0);
    //     }

    //     if (searchText) {
    //         filtered = filtered.filter((contact) =>
    //             contact.name.toLowerCase().includes(searchText.toLowerCase())
    //         );
    //     }

    //     setFilteredContacts(filtered);
    // }, [contacts, onlyEven, searchText]);

    const openModalC = (contact) => {
        setShowModalC(true);
    };

    return (
        <div className="problem-2">
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <h4 className="text-center text-uppercase mb-5">
                        Problem-2
                    </h4>

                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/problem-1/all-contacts">
                            <button
                                className="btn btn-lg btn-outline-primary"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#ModalA"
                            >
                                All Contacts
                            </button>
                        </Link>
                        <Link to="/problem-1/us-contacts">
                            <button
                                className="btn btn-lg btn-outline-warning"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#ModalB"
                            >
                                US Contacts
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal A */}
            <div class="modal-dialog modal-dialog-scrollable">
                <div
                    class="modal fade"
                    id="ModalA"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                    Modal A - All Contacts
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <ul>
                                    {contacts?.map((contact) => (
                                        <li
                                            style={{ cursor: "pointer" }}
                                            key={contact.id}
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#ModalC"
                                        >
                                            {contact?.phone} -{" "}
                                            {contact?.country?.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div class="modal-footer">
                                <div className="d-flex justify-content-between">
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="flexCheckDefault"
                                        >
                                            Only Even
                                        </label>
                                    </div>
                                    <div>
                                        <button
                                            style={{
                                                backgroundColor: "#46139f",
                                                color: "white",
                                            }}
                                            type="button"
                                            class="btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#ModalA"
                                        >
                                            All Contacts
                                        </button>
                                        <button
                                            style={{
                                                backgroundColor: "#ff7f50",
                                                color: "white",
                                            }}
                                            type="button"
                                            class="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#ModalB"
                                        >
                                            Us Contacts
                                        </button>
                                        <Link to="/problem-2">
                                            <button
                                                style={{
                                                    backgroundColor: "#46139f",
                                                    color: "white",
                                                }}
                                                type="button"
                                                class="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal B */}
            <div class="modal-dialog modal-dialog-centered">
                <div
                    class="modal fade"
                    id="ModalB"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                    Modal B - US Contacts
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <ul>
                                    {usContacts?.map((contact) => (
                                        <li
                                            key={contact.id}
                                            onClick={() => openModalC(contact)}
                                        >
                                            {contact?.phone} -{" "}
                                            {contact?.country?.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div class="modal-footer">
                                <div className="d-flex justify-content-between">
                                    <div class="form-check start-0">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="flexCheckDefault"
                                        >
                                            Only Even
                                        </label>
                                    </div>
                                    <div>
                                        <button
                                            style={{
                                                backgroundColor: "#46139f",
                                                color: "white",
                                            }}
                                            type="button"
                                            class="btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#ModalA"
                                        >
                                            All Contacts
                                        </button>
                                        <button
                                            style={{
                                                backgroundColor: "#ff7f50",
                                                color: "white",
                                            }}
                                            type="button"
                                            class="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#ModalB"
                                        >
                                            Us Contacts
                                        </button>
                                        <button
                                            style={{
                                                backgroundColor: "#46139f",
                                                color: "white",
                                            }}
                                            type="button"
                                            class="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal C */}
            {showModalC && (
                <div class="modal-dialog modal-dialog-centered">
                    <div
                        class="modal fade"
                        id="ModalC"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Modal C - All Contacts
                                    </h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div class="modal-body">
                                    <ul>
                                        {contacts?.map((contact) => (
                                            <li
                                                key={contact.id}
                                                onClick={() =>
                                                    openModalC(contact)
                                                }
                                            >
                                                {contact?.phone} -{" "}
                                                {contact?.country?.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <div className="d-flex justify-content-between">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="flexCheckDefault"
                                            >
                                                Only Even
                                            </label>
                                        </div>
                                        <div>
                                            <button
                                                style={{
                                                    backgroundColor: "#46139f",
                                                    color: "white",
                                                }}
                                                type="button"
                                                class="btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#ModalA"
                                            >
                                                All Contacts
                                            </button>
                                            <button
                                                style={{
                                                    backgroundColor: "#ff7f50",
                                                    color: "white",
                                                }}
                                                type="button"
                                                class="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#ModalB"
                                            >
                                                Us Contacts
                                            </button>
                                            <Link to="/problem-2">
                                                <button
                                                    style={{
                                                        backgroundColor:
                                                            "#46139f",
                                                        color: "white",
                                                    }}
                                                    type="button"
                                                    class="btn btn-secondary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Problem2;
