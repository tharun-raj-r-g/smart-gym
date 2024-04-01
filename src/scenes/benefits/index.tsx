import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/bodybuildertwo.png";
import Benefit from "./Benefit";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Personalized Training",
    description:
      "Our AI-powered algorithms analyze your performance and preferences to create customized workout plans that evolve with your fitness journey.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Real-Time Feedback",
    description:
      "Get instant feedback on form and intensity, ensuring every rep counts and maximizing results.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Unlock Peak Efficiency",
    description:
      " Empower your team and unlock peak efficiency with our gym task manager. Say goodbye to inefficiencies and hello to streamlined operations that drive success.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            Upgrade your gym with FitTech Solutions and experience the future of
            fitness firsthand. Say hello to smarter workouts, better results,
            and a healthier you. Let's make every workout count together!
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    WE AIM FOR MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-blue-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                our mission is clear: to inspire and empower millions of
                individuals to achieve their fitness goals and lead happier,
                healthier lives. With a passionate commitment to fostering
                wellness, we provide cutting-edge facilities and personalized
                training programs to support our members every step of the way.
                Our goal is simple: to see millions of smiling faces celebrating
                their fitness achievements and embracing a vibrant lifestyle.
                Join our family and become part of something extraordinary – a
                movement towards wellness and vitality.
              </p>
              <p className="mb-5">
                Experience the joy of transformation and the thrill of reaching
                new heights with us. Your journey to fitness excellence starts
                here – join us and let's make it extraordinary! Together, let's
                aim for the stars and achieve greatness, one milestone at a
                time. Join [Company Name] today and let's make millions of
                dreams come true – because when you succeed, we all do!
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <SignedIn>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Workout
                </ActionButton>
                </SignedIn>
                <SignedOut>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
                </SignedOut>

              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
