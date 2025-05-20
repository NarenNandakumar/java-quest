
const CodeAnimation = () => {
  const codeSnippets = [
    `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    `import java.util.Scanner;

public class UserInput {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name + "!");
        scanner.close();
    }
}`,
    `public class ForLoop {
    public static void main(String[] args) {
        for(int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}`
  ];

  return (
    <section className="py-12 bg-javaquest-blue overflow-hidden">
      <div className="flex whitespace-nowrap animate-code-flow">
        {[...Array(2)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex">
            {codeSnippets.map((code, index) => (
              <div key={`${arrayIndex}-${index}`} className="mx-8 code-snippet min-w-[400px]">
                <pre className="code-font text-sm opacity-80">
                  {code}
                </pre>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodeAnimation;
