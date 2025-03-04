1. Download and Install ollama from ollama.com
2. open a terminal and> ollama run mistral
3. npm install axios
4. Create a Next.js API Route for Ollama (src/app/api/chat/route.ts)
5. Update the Chat UI (src/components/Chat.tsx)
6. ollama serve
7. npm run dev
8. To stop any existing Ollama instance and restart it:
taskkill /F /IM ollama.exe
ollama serve
9. To find the process manually: netstat -ano | findstr :11434
10. Note the PID (Process ID) from the output and then stop it using:
taskkill /F /PID <PID>
