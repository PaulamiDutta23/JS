const writer = Deno.stdout.writable.getWriter();
for await(const chunk of Deno.stdin.readable) {
   writer.write(chunk);
}