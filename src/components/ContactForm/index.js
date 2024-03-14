import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./styles.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message, type) => {
    let color;
    if (type === "success") {
      color = "green"; // Set color to green for success
    } else if (type === "danger") {
      color = "red"; // Set color to red for failure
    }
  
    setAlertInfo({ display: true, message, type, color });
  
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "", color: "" });
    }, 25000);
  };
  
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
  
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
  
      await emailjs.send(
        'service_q7wj86d',
        'template_8y9v59x',
        templateParams,
        '3bzZRvJ14gyTLnw4G'
      );
  
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-black/30 rounded-lg p-8 w-full">
      <h1 className="text-4xl md:text-6xl font-bold text-whitePrimary flex-1">
        Contact Me
      </h1>
      <div className="ContactForm flex flex-col w-full flex-1 items-center">
        <div className="w-full p-4">
          <form
            id="contact-form"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    maxLength: {
                      value: 30,
                      message: "Please use 30 characters or less",
                    },
                  })}
                  className="form-control formInput w-full rounded-lg"
                  placeholder="Name"
                ></input>
                {errors.name && (
                  <span className="errorMessage">{errors.name.message}</span>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className="form-control formInput w-full rounded-md"
                  placeholder="Email address"
                ></input>
                {errors.email && (
                  <span className="errorMessage">
                    Please enter a valid email address
                  </span>
                )}
              </div>
            </div>
            <input
              type="text"
              name="subject"
              {...register("subject", {
                required: {
                  value: true,
                  message: "Please enter a subject",
                },
                maxLength: {
                  value: 75,
                  message: "Subject cannot exceed 75 characters",
                },
              })}
              className="form-control formInput rounded-md w-full"
              placeholder="Subject"
            ></input>
            {errors.subject && (
              <span className="errorMessage">{errors.subject.message}</span>
            )}
            <textarea
              rows={3}
              name="message"
              {...register("message", {
                required: true,
              })}
              className="form-control formInput rounded-md w-full"
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <span className="errorMessage">Please enter a message</span>
            )}
            <button
              className="submit-btn btn btn-primary bg-white"
              disabled={disabled}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        {alertInfo.display && (
          <div
            className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
            role="alert"
          >
            {alertInfo.message}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() =>
                setAlertInfo({ display: false, message: "", type: "" })
              }
            ></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
