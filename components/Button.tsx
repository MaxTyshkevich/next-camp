import Image from 'next/image';

type varialts =
  | 'btn_white'
  | 'btn_white_text'
  | 'btn_green'
  | 'btn_dark_green'
  | 'btn_dark_green_outline';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  varialt: varialts;
};

const Button = ({ type, title, icon, varialt }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter rounded-full border gap-3 ${varialt}`}
    >
      {icon && <Image src={icon} height={24} width={24} alt="menu" />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
