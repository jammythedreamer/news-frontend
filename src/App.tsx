import "./App.css";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="space-y-6">
        <section>
          <h1 className="text-4xl font-bold mb-4">오늘의 주요 뉴스</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">뉴스 제목 1</h2>
              <p className="text-muted-foreground">
                뉴스 내용 요약이 여기에 표시됩니다...
              </p>
            </article>
            <article className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">뉴스 제목 2</h2>
              <p className="text-muted-foreground">
                뉴스 내용 요약이 여기에 표시됩니다...
              </p>
            </article>
            <article className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">뉴스 제목 3</h2>
              <p className="text-muted-foreground">
                뉴스 내용 요약이 여기에 표시됩니다...
              </p>
            </article>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;
