# 🖥️ Web App de Diagnóstico de PC

Esta es una aplicación web diseñada para diagnosticar y solucionar problemas comunes en computadoras portátiles y de escritorio. Permite a los usuarios seleccionar el tipo de equipo (notebook o de escritorio), ingresar detalles específicos sobre el mismo y describir el problema experimentado. Con esta información, la aplicación genera posibles problemas y soluciones, ayudando a los usuarios a resolverlos de manera eficiente.

## ✨ Características

- **🖱️ Diagnóstico de PC**: Selección entre notebook o PC de escritorio para un diagnóstico personalizado.
- **💡 Generación de Soluciones**: Utiliza la API de Groq para generar diagnósticos y soluciones basadas en la descripción del problema.
- **🎨 Interfaz Amigable**: UI simple e intuitiva que facilita la introducción de detalles necesarios por parte del usuario.

## 🛠️ Tecnologías

- **⚛️ Next.js**: Framework de React para el desarrollo de la aplicación web.
- **🎨 Tailwind CSS**: Framework de utilidades CSS para un diseño moderno y eficiente.
- **🤖 Vercel AI SDK**: Integración con la API de Groq para el procesamiento de diagnósticos.
- **📦 pnpm**: Gestor de paquetes utilizado para manejar las dependencias del proyecto.
- **🧠 Groq API**: Servicio basado en IA para la generación de diagnósticos.

## ⚙️ Configuración

### 🔑 Prerrequisitos

- Node.js
- pnpm (puedes instalarlo siguiendo las instrucciones en [pnpm.io](https://pnpm.io/installation))

### 📥 Clonar el repositorio

```bash
git clone https://github.com/MrPotatoXx/compu-rescue.git
cd compu-rescue
```

### 📦 Instalación de Dependencias

Instala las dependencias del proyecto usando pnpm:

```bash
pnpm install
```
### 🔐 Configuración de la API Key

Para que la aplicación funcione correctamente, necesitas una API key de Groq. Puedes obtenerla siguiendo estos pasos:

1. Ve a [Groq Console](https://console.groq.com/keys) y crea una nueva API key.
2. Copia la API key.

Luego, crea un archivo `.env.local` en la raíz del proyecto y agrega la API key de la siguiente manera:

```bash
NEXT_PUBLIC_GROQ_API_KEY=tu_api_key_aqui
```

## 🚀 Ejecutar la Aplicación

Una vez que hayas configurado todo, puedes iniciar la aplicación en modo desarrollo con el siguiente comando:

```bash
pnpm dev
```
Esto iniciará el servidor de desarrollo en http://localhost:3000.

## 🤝 Contribuciones

Si quieres contribuir al proyecto, por favor abre un pull request o crea un issue para discutir los cambios propuestos.