import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const TechList = [
  {
    name: "HTML",
    src: "/image/HTML.png",
    description:
      "HTMLはWebページの基本構造を定義するマークアップ言語です。要素をタグで表現し、コンテンツの骨組みを作ります。",
  },
  {
    name: "CSS",
    src: "/image/CSS.png",
    description:
      "CSSはHTMLで作成した構造にスタイルを適用するための言語です。レイアウトやデザイン、色などを調整し、視覚的に魅力的なページを実現します。",
  },
  {
    name: "Javascript",
    src: "/image/Javascript.png",
    description:
      "JavaScriptは、ウェブサイトに動きを与えるためのプログラミング言語です。動的なコンテンツ生成、イベント処理、非同期通信など、幅広い用途で利用される。",
  },
  {
    name: "Typescript",
    src: "/image/Typescript.png",
    description:
      "TypeScriptは、JavaScriptに静的型付けを加えた言語です。型チェックによりコードの信頼性が向上し、大規模なアプリケーションの開発や保守がしやすくなる。",
  },
  {
    name: "Java",
    src: "/image/Java.png",
    description:
      "オブジェクト指向のプログラミング言語。「一度書けばどこでも動く」という理念に基づいて設計されている。",
  },
  {
    name: "SQL",
    src: "/image/SQL.png",
    description:
      "SQL (Structured Query Language) は、リレーショナルデータベースと対話するための標準的な言語です。",
  },
  {
    name: "Git",
    src: "/image/Git.png",
    description:
      "Gitはソフトウェアのバージョン管理システムです。コードの変更履歴を管理し、複数人での開発作業を円滑に進めることができます。",
  },
  {
    name: "Github",
    src: "/image/Github.png",
    description:
      "GitHubはGitリポジトリをホスティングするオンラインプラットフォームです。プロジェクトの共有やコラボレーション、オープンソース開発に適したツールが充実しています。",
  },
];

export default function SkillSection() {
  return (
    <section id="skill" className="my-auto scroll-m-20">
      <div className="flex flex-col items-center justify-center py-8">
        <h2 className=" my-6 scroll-m-20 text-4xl font-semibold tracking-tight lg:text-4xl">
          Studying Now
        </h2>
        <p className="text-muted-foreground">今学習していること</p>
      </div>

      <div className="grid max-w-6xl gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {TechList.map(({ name, src, description }) => {
          return (
            <Card key={name} className="w-[350px]">
              <CardHeader>
                <div className="flex items-center justify-center gap-3">
                  <Image
                    src={src}
                    alt={name}
                    width={100}
                    height={100}
                    className="rounded-xl"
                  />
                  <div className="flex flex-col  justify-center">
                    <CardTitle>{name}</CardTitle>
                    <CardDescription className="pt-2">
                      {description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
