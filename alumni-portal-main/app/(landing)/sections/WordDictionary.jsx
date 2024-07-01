import Image from "next/image";

import logo from "@/public/mc-logo.svg";
import edit from "@/public/mc-edit.svg";
import rocket from "@/public/mc-rocket.svg";

export default function WordDictionary() {
  return (
    <>
      <div className="py-16">
        <ul className="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
          <li>
            <div className="p-6 text-left rounded-lg xl:px-10">
              <div className="space-y-2">
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <div className="flex justify-center">
                      <h3 className="font-bold text-xl w-auto h-auto">
                        Find Your Mentor
                      </h3>
                    </div>
                    <div className="flex justify-center px-10 py-4">
                      <Image src={logo} alt="MentorCruise" />
                    </div>
                    <div>
                      <p className="my-4 text-base text-center">
                        Explore our growing catalogue of experienced mentors
                        until you find the perfect fit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="p-6 text-left rounded-lg xl:px-10">
              <div className="space-y-2">
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <div className="flex justify-center">
                      <h3 className="font-bold text-xl w-auto h-auto">
                        Apply for Mentorship
                      </h3>
                    </div>
                    <div className="flex justify-center px-10 py-4">
                      <Image src={edit} alt="MentorCruise" />
                    </div>
                    <div>
                      <p className="my-4 text-base text-center">
                        Fill in an application, and if you&apos;re a match with
                        your chosen mentor you can start getting mentored.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="p-6 text-left rounded-lg xl:px-10">
              <div className="space-y-2">
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <div className="flex justify-center">
                      <h3 className="font-bold text-xl w-auto h-auto">
                        Level up your skills
                      </h3>
                    </div>
                    <div className="flex justify-center px-10 py-4">
                      <Image src={rocket} alt="MentorCruise" />
                    </div>
                    <div>
                      <p className="my-4 text-base text-center">
                        From personal chats to hands-on support, each mentor
                        offers different services to help you skyrocket your
                        career.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center bg-primary my-12 py-24 text-white">
        <h3 className="font-bold">Mentor</h3>
        <div>
          <i>[Noun]</i>
        </div>
        <h4 className="pt-5 pb-12 text-center mx-2">
          A <strong>mentor</strong> is an awesome person, who <br />
          <strong>shares their knowledge, skills and experience</strong> <br />
          to help another person to progress.
        </h4>
      </div>
    </>
  );
}
