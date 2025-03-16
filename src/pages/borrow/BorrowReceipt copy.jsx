import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchData } from "../../utils/fetchData";

const BorrowReceipt = () => {
    const { id } = useParams();
    // console.log(id)
    const baseUrl = "http://localhost/Library_Exam/admin";
    const [borrowDetails,setBorrowDetails] = useState({});
    const [booksDetails,setBookDetails] = useState({});
    const [book,setBook] = useState({});
    const [category,setCategory] = useState({});

    // const fetchBorrowDetails = async()=>{
    //     const response = await axios.get(`${baseUrl}/api/borrowdetail/find?id=${id}`);
    //     setBorrowDetails(response?.data?.borrowdetail)
                
    // }
    // console.log(borrowDetails?.book_id)
    const fetchBook = async(bookId)=>{
        const response = await axios.get(`${baseUrl}/api/book/find?id=${bookId}`);
        // setBookDetails(response?.data.book)
        setBookDetails(response.data.book)
                
    }

    // useEffect(()=>{
    //     fetchBorrowDetails()
    // },[]);

    useEffect(() => {
        
            fetchBook(1);
        
    }, []);

   

    // console.log(borrowDetails)
    console.log(book)
    // console.log(category)
    // console.log(borrowDetails)
    let index = 1;

    return (
        <div className="container mt-2">
            <ToastContainer />
            <div className="receipt bg-white border rounded shadow-sm p-4">
                <div className="text-center mb-4">
                    <h1 className="h4">Village Library Movement</h1>
                    <p className="text-muted">
                        Book Receipt
                        <hr />
                    </p>
                </div>

                {/* Borrower Details */}
                <table className="table table-borderless mb-4">
                    <tbody>
                        <tr>
                            <th className="text-start">Reader Name:</th>
                            <td>{reader.name}</td>
                        </tr>
                        <tr>
                            <th className="text-start">Membership ID:</th>
                            <td>#{reader.id}</td>
                        </tr>
                        <tr>
                            <th className="text-start">Contact:</th>
                            <td>{reader.phone}</td>
                        </tr>
                        <tr>
                            <th className="text-start">Issue Date:</th>
                            <td>{new Date(borrowDetails.borrow_date).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <th className="text-start">Return Date:</th>
                            <td>{new Date(borrowDetails.return_date).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <th className="text-start">Librarian:</th>
                            <td>{staff.name}</td>
                        </tr>
                    </tbody>
                </table>

                {/* Borrowed Books Table */}
                <table className="table table-striped table-bordered text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Book Title</th>
                            <th>Author</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>{index++}</td>
                                {/* <td>{booksDetails.title}</td>
                                <td>{booksDetails.author}</td>
                                <td>{booksDetails.category_name || "N/A"}</td> */}
                            </tr>
                    </tbody>
                </table>

                {/* Print Button */}
                <div className="text-end mt-3">
                    <button onClick={() => window.print()} className="btn btn-primary btn-print">
                        Print Receipt
                    </button>
                </div>

                {/* Footer */}
                <div className="text-center mt-4 text-secondary">
                    <p className="mb-0">Thank you for using the library!</p>
                    <p>Contact us: mdaslamcric@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default BorrowReceipt;
