import { useState, useRef, useEffect, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { FaLocationArrow, FaSpinner } from 'react-icons/fa';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [spin, setSpin] = useState<boolean>(false);
  const [alert, setAlert] = useState<string | undefined>();
  const [theme, setTheme] = useState<string | undefined>();

  const Color = { success: 'bg-[#07bc0c]', danger: 'bg-[#e74c3c]' };

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() && email.trim() && subject.trim() && message.trim()) {
      const serviceId = 'service_g66n9ro';
      const templateId = 'template_fbeta7k';
      const publicKey = 'Uzx4fdYLrzsm9puW9';
      setSpin(true);
      emailjs
        .sendForm(serviceId, templateId, form.current!, publicKey)
        .then((result) => {
          setAlert(
            'Thank you for reaching out, we will be in touch in no time!'
          );
          setTheme(Color.success);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setSpin(false);
        })
        .catch((error) => {
          setSpin(false);
          setAlert('Huh, an error occurred: ' + error.message + ' !!!');
          setTheme(Color.danger);
          console.log(error);
        });
    } else {
      setAlert('Please fill in all fields.');
      setTheme(Color.danger);
    }
  };

  const INTERVAL = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setAlert(undefined);
    }, INTERVAL);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section className="pt-32 pb-20 mx-auto text-white px-3 flex items-center justify-center max-w-7xl w-full lg:px-10 transition-all duration-700 ease-in-out">
      <div className="flex flex-wrap items-center justify-between w-full">
        <div className="w-full px-4 lg:w-6/12">
          <div className=" flex items-center sm:-mx-4">
            <div className="w-full px-3 sm:px-4">
              <img
                src="/images/casual-life-3d-girl-talking-on-retro-phone-and-smiling_result.svg"
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 mb-32 md:mb-40 lg:mb-16 mt-4">
          <div className="flex items-center mb-2 w-full">
            <h2 className="flex items-center text-green-400 font-semibold text-lg sm:text-2xl">
              <ArrowLeft />
              03
              <ArrowRight />
            </h2>
            <span className=" block text-md sm:text-base font-medium text-zinc-400">
              Have a Project in Mind? 💼
            </span>
            <h2 className="flex items-center text-green-400 font-semibold text-lg sm:text-2xl">
              <ArrowLeft />
              /03
              <ArrowRight />
            </h2>
          </div>

          <form
            ref={form}
            className="grid gap-5 transition-all duration-700 ease-in-out "
            onSubmit={sendEmail}
          >
            <div
              className={`shadow w-full my-2 z-50 ${
                alert ? 'flex bounce' : 'hidden'
              } justify-center flex-row px-2 py-2 gap-2 items-center rounded-lg shadow ${theme} transition-all duration-700 ease-in-out`}
            >
              <span className="flex-shrink-0 inline-flex item-center justify-center leading-none rounded-full ">
                {theme === Color.danger ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={`white`}
                    className="h-8 w-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-8 w-8 "
                    viewBox="0 0 1020 1020"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M469.333333 640l0.384 0.384L469.333333 640z m-106.282666 0l-0.384 0.384 0.384-0.384z m48.512 106.666667a87.466667 87.466667 0 0 1-61.653334-24.874667l-179.52-173.632a67.797333 67.797333 0 0 1 0-98.24c28.032-27.157333 73.493333-27.157333 101.589334 0l139.584 134.997333 319.168-308.544c28.032-27.157333 73.493333-27.157333 101.589333 0a67.925333 67.925333 0 0 1 0 98.24L472.981333 722.069333A87.530667 87.530667 0 0 1 411.562667 746.666667z"
                      fill="white"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>

              <div className="flex-1 p-2 truncate">
                <p className="text-sm truncate">{alert}</p>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                className={` ${
                  !name && alert && 'bounce'
                } block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border border-zinc-700 appearance-none  focus:outline-none focus:ring-0 focus:border-zinc-600 peer`}
                placeholder=" "
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <label className="absolute text-sm text-zinc-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-zinc-700 rounded px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                {' '}
                Name
              </label>
            </div>
            {/*  */}
            <div className="relative">
              <input
                type="email"
                className={` ${
                  !email && alert && 'bounce'
                } block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border border-zinc-700 appearance-none  focus:outline-none focus:ring-0 focus:border-zinc-600 peer`}
                placeholder=" "
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="absolute text-sm text-zinc-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-zinc-700 rounded px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                {' '}
                Email Address
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                className={` ${
                  !subject && alert && 'bounce'
                } block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border border-zinc-700 appearance-none  focus:outline-none focus:ring-0 focus:border-zinc-600 peer`}
                placeholder=" "
                value={subject}
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
              />
              <label className="absolute text-sm text-zinc-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-zinc-700 rounded px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                {' '}
                Subject
              </label>
            </div>
            <div className="relative ">
              <textarea
                className={` ${
                  !message && alert && 'bounce'
                } block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border border-zinc-700 appearance-none  focus:outline-none focus:ring-0 focus:border-zinc-600 peer`}
                placeholder=" "
                cols={0}
                rows={4}
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <label className="absolute text-sm text-zinc-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-zinc-700 rounded px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-8 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                {' '}
                Message
              </label>
            </div>
            <div>
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white p-4 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-800">
                {spin ? (
                  <div className="flex items-center">
                    <FaSpinner />
                    <p className="ml-3"> Processing...</p>
                  </div>
                ) : (
                  <p className="flex items-center">
                    Contact Me
                    <FaLocationArrow className="ml-3" />
                  </p>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
