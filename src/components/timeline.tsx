import { FaBriefcase, FaCertificate, FaStar } from "react-icons/fa";

interface Props {
  props: {
    element: React.ReactNode;
    type?: "work" | "education";
  }[];
}

export function Timeline({ props }: Props) {
  return (
    <ol className="w-full pl-5 mt-4">
      {props.map((prop, index) => (
        <li
          className={`${index < props.length - 1 && "mb-4"} relative`}
          key={index}
        >
          {index < props.length - 1 && props.length > 1 && (
            <div
              className={`absolute left-0 ${
                index === 0
                  ? "top-12 -bottom-12"
                  : index === props.length - 2
                  ? "top-0 -bottom-12"
                  : "top-0 -bottom-12"
              } w-1 border-l-8 border-base-300 z-10`}
            ></div>
          )}
          <span className="absolute flex items-center justify-center w-12 h-12 rounded-full -left-5 mt-3 bg-base-300 z-50">
            {prop.type === "work" ? (
              <FaBriefcase size={30} className="text-success" />
            ) : prop.type === "education" ? (
              <FaCertificate size={30} className="text-success" />
            ) : (
              <FaStar size={30} className="text-success" />
            )}
          </span>
          <div className="pl-10 w-full">{prop.element}</div>
        </li>
      ))}
    </ol>
  );
}
