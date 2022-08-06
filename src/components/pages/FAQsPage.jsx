import formStyleClasses from "styles/forms";

function faqsPage() {
    return (
        <div className="container mx-auto p-10">
            <div>
            <h1 className="font-bold text-lg mb-2">Frequently Asked Questions</h1>
            </div>

            <p> Q: I could not enter information into the form <br/>
                A: Fill out this "<a className={formStyleClasses.hyperlinks} href="https://www.dataumbrella.org/">Contact Us</a>" Form to report the issue
            </p> <br/>

            <p>
                Q: How can I contribute to this event board? <br/>
                A: The repositories for frontend and backend are on Github. Contributions can be made there: <br/>
                <ul className="list-disc pl-5"> <br/>
                    <li>Frontend: <a className={formStyleClasses.hyperlinks} href="https://github.com/data-umbrella/event-board-web">https://github.com/data-umbrella/event-board-web</a></li>
                    <li>Backend: <a className={formStyleClasses.hyperlinks} href="https://github.com/data-umbrella/event-board-api">https://github.com/data-umbrella/event-board-api</a></li>
                </ul>
            </p>
        </div>
    ) 
};

export default faqsPage;