import { ThemeSwitcher } from "./theme-switcher";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full border-t py-8">
      <div className="max-w-7xl flex items-center justify-between mx-auto text-center text-md px-4">
        <p>
          Developed by <span className="font-bold">Alejandro Pérez Durán</span>
        </p>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}
