for await (const chunk of Deno.stdin.readable) {
  console.log(new TextDecoder().decode(chunk));
}
