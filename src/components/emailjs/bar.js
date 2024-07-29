import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Bar = ({ mobile }) => {
  const [email, setEmail] = useState({
    message: "",
    file: "",
    uemail: "",
    uphone: "",
  });
  const [fileError, setFileError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [fileload, setFileLoad] = useState(false);
  const [thanks, setThanks] = useState(false);

  const handleFileChange = (e) => {
    setFileLoad(true);
    const file = e.target.files[0];
    if (file) {
      if (file.size > 50 * 1024) {
        // Check if file size is greater than 50KB
        setFileError("File size must be less than 50KB");
        setFileLoad(false);
        return;
      }

      const validFileTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!validFileTypes.includes(file.type)) {
        setFileError("Only PDF and DOCX files are allowed");
        setFileLoad(false);
        return;
      }

      setFileError("");
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        let base64String = reader.result;
        setEmail({ ...email, file: base64String });
        setFileLoad(false);
      });
      reader.readAsDataURL(file);
    } else {
      setFileLoad(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.message) {
      alert("Please enter a message.");
      return;
    }
    // if (!email.file) {
    //   alert("Please attach a file.");
    //   return;
    // }
    if (!email.uemail) {
      alert("Please enter your Email.");
      return;
    }
    setLoading(true);
    emailjs
      .send(
        "service_cxl3wkl",
        "template_zwe6olk",
        {
          message_html: email.message,
          file: email.file,
          email: email.uemail,
          phone: email.uphone,
        },
        "Eb5BgVpUc8b70M-yr"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Submitted Succesfully! ");
        setLoading(false);
        setThanks(true);
        setEmail({
          message: "",
          file: "",
          uemail: "",
          uphone: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setLoading(false);
        toast.error("Something went wrong, Try Again! ");
        setThanks(false);
      });
  };

  return (
    <>
      <Toaster />
      {isLoading && (
        <div className="bg-blur d-flex align-items-center justify-content-content-center" style={{ zIndex: 9999 }}>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <h4 className="fs-2 me-2">Loading</h4>
            <div className="spinner me-3">
              <div class="spinner__dot"></div>
              <div class="spinner__dot"></div>
              <div class="spinner__dot"></div>
              <div class="spinner__dot"></div>
              <div class="spinner__dot"></div>
              <div class="spinner__dot"></div>
              <div class="spinner__dot"></div>
              <div class="spinner__dot"></div>
            </div>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="position-relative">
        {email.file !== "" && (
          <div className="dialogLoder d-flex align-items-center justify-content-center">
            {fileload && (
              <div className="spinner me-3">
                <div class="spinner__dot"></div>
                <div class="spinner__dot"></div>
                <div class="spinner__dot"></div>
                <div class="spinner__dot"></div>
                <div class="spinner__dot"></div>
                <div class="spinner__dot"></div>
                <div class="spinner__dot"></div>
                <div class="spinner__dot"></div>
              </div>
            )}
            {email.file !== "" && <img src="./icons/doc_b.svg"></img>}
          </div>
        )}
        {!mobile && (
          <div className="mb-3 position-relative">
            <input
              type="text"
              value={email.message}
              onChange={(e) => setEmail({ ...email, message: e.target.value })}
              className="form-control rounded-pill txtcolor-primary p-3 bar"
              id="message"
              aria-describedby="message"
              placeholder=" Get a Quote or Just say Hi!..."
            />

            <label htmlFor="formFileLg" style={{ cursor: "pointer" }} className="p-3 icon-attach border-0  position-relative">
              <img src="./icons/attach.svg" />

              <input className="form-file" id="formFileLg" type="file" hidden onChange={handleFileChange} />
            </label>

            {fileError && <div className="text-danger">{fileError}</div>}

            {email.message.length > 3 ? (
              <button type="button" className="p-3 icon-send border-0" data-bs-toggle="modal" data-bs-target="#formModal">
                <img src="./icons/send.svg" />
              </button>
            ) : (
              <button type="button" className="p-3 icon-send border-0 disabled" data-bs-toggle="modal" data-bs-target="#formModal" disabled>
                <img src="./icons/send.svg" />
              </button>
            )}
          </div>
        )}

        {mobile && (
          <div className="mobilebar">
            <div className="mb-3 position-relative">
              <input
                type="text"
                value={email.message}
                onChange={(e) => setEmail({ ...email, message: e.target.value })}
                className="form-control rounded-pill txtcolor-primary p-3 bar"
                id="message"
                aria-describedby="message"
                placeholder=" Get a Quote or Just say Hi!..."
              />

              <label htmlFor="formFileLg" style={{ cursor: "pointer" }} className="p-3 icon-attach border-0  position-relative">
                <img src="./icons/attach.svg" />

                <input className="form-file" id="formFileLg" type="file" hidden onChange={handleFileChange} />
              </label>

              {fileError && <div className="text-danger">{fileError}</div>}

              <button type="button" className="p-3 icon-send border-0" data-bs-toggle="modal" data-bs-target="#formModal">
                <img src="./icons/send.svg" />
              </button>
            </div>
          </div>
        )}
        {email.message.length > 3 && (
          <div className="container-fluid">
            <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
              <div class="modal-dialog ">
                <div class="modal-content  bgcolor-secondary p-lg-4 p-2" style={{ borderRadius: "50px" }}>
                  <div class="modal-header border-0">
                    <button type="button" className="btn ms-auto bgcolor-primary p-3 rounded-circle " data-bs-dismiss="modal" aria-label="Close">
                      <img src="./icons/close.svg" />
                    </button>
                  </div>
                  <div class="modal-body p-3">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label txtcolor-primary">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control rounded-pill txtcolor-primary p-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => {
                          setEmail({ ...email, uemail: e.target.value });
                        }}
                        placeholder="Enter your Email"
                        required
                      />
                      <div id="emailHelp" class="form-text txtcolor-primary">
                        We'll never share your email with anyone else.
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="phone" class="form-label txtcolor-primary">
                        Phone (Optional)
                      </label>
                      <input
                        type="password"
                        class="form-control rounded-pill txtcolor-primary p-3"
                        id="phone"
                        onChange={(e) => {
                          setEmail({ ...email, uphone: e.target.value });
                        }}
                        placeholder="Enter your Phone number"
                      />
                    </div>

                    <div className="w-100 text-center mt-4">
                      <button type="submit" className="p-3 btn rounded-pill fw-bold px-5 txtcolor-secondary bgcolor-primary  mx-auto border-0" data-bs-dismiss="modal" aria-label="Close">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>

      {thanks && (
        <div className="container-fluid">
          <div class="modal d-block" id="formModal2" tabindex="-1" aria-labelledby="formModalLabel">
            <div class="modal-dialog ">
              <div class="modal-content  bgcolor-secondary p-lg-4 p-2" style={{ borderRadius: "50px" }}>
                <div class="modal-header border-0">
                  <button type="button" className="btn ms-auto bgcolor-primary p-3 rounded-circle " onClick={() => setThanks(false)}>
                    <img src="./icons/close.svg" />
                  </button>
                </div>
                <div class="modal-body p-3 txtcolor-primary">
                  <p className="lead">Your Message has been successfully deliverd to our team. We will get back to you soon.</p>
                  <p className="fw-bold"> If you don't receive any reaponse on your submitted email please check the spam folder or resend the mail</p>

                  <h4 className="h5">Thank You</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bar;
