import ThemeSwitcher from "./components/ThemeSwitcher"
import ThemeColorsSwitcher from "./components/ThemeColorsSwitcher"

export default function App() {
  return (
    <main className="bg-white dark:bg-black relative">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          {/* 任务: 主题切换 */}
          <ThemeSwitcher />
          <div className="mx-auto max-w-2xl sm:text-center">
            {/* 任务：颜色切换 */}
            <ThemeColorsSwitcher />
            <h2 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl text-center">
              Profit Margin Calculator
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white text-center">
              Optimize your menu item prices to maximize profits by identifying
              the most effective selling prices.
            </p>
          </div>

          {/* 任务：calculator 计算器 */}
        </div>
      </div>
    </main>
  );
}
