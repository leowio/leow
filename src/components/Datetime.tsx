import { LOCALE } from "@config";

export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({ datetime, size = "sm", className }: Props) {
  return (
    <div className={`flex items-center space-x-2 opacity-80 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 10"
        className="inline-block size-4 fill-skin-base"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0 9h9V0H0Zm1-1V3h7v5Zm1-1h1V6H2Zm0-2h1V4H2Zm2 2h1V6H4Zm0-2h1V4H4Zm2 2h1V6H6Zm0-2h1V4H6Zm0 0"
        ></path>
      </svg>
      <span className="sr-only">Posted on:</span>
      <span className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedDatetime datetime={datetime} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <>{date}</>;
};
