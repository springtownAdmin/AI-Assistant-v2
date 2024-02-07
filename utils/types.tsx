import { ReactNode, MouseEventHandler } from 'react';

// ===============================================================>
// 👇 BackdropProps - Types
// ===============================================================>

export type BackdropProps = {
    children?: ReactNode, 
    onClick?: MouseEventHandler<HTMLDivElement>
}

// ===============================================================>
// 👇 useBackdropContext - Types
// ===============================================================>

export type BackdropContextType = {
    isToggled: boolean,
    handleToggle: () => void,
    handleClose: () => void,
    handleOpen: () => void,
} | undefined;


// ===============================================================>
// 👇 usePrompt - Types
// ===============================================================>

export type ChatType = {
    user: string,
    bot: string,
    reference: any
}[];

export type TextAreaRefType = HTMLTextAreaElement | null

export type handleQueryType = React.ChangeEventHandler<HTMLTextAreaElement>

export type handleEnterType = React.KeyboardEvent<HTMLTextAreaElement>

// ===============================================================>
// 👇 useUpload - Types
// ===============================================================>

export type fileRefType = HTMLInputElement | null

export type fileStateTypes = File[]

export type handleOpenFileType = React.MouseEventHandler<HTMLButtonElement>

export type fileType = File | null

export type OnChangeEventType = React.ChangeEvent<HTMLInputElement>

export type previewStateType = {
    name?: string,
    url?: string
}[]

export type fileEventType = EventTarget & HTMLInputElement

export type DragEventType = React.DragEvent<HTMLDivElement>

// ===============================================================>
// 👇 useFileContext - Types
// ===============================================================>

export type FileContextType = {
    files: fileStateTypes;
    fileRef: React.MutableRefObject<fileRefType>; 
    handleOpenFile: handleOpenFileType; 
    handleFileChange: (e: OnChangeEventType) => void;
    handleDrop: (e: DragEventType) => void
    handleRemove: (id: number) => void;
    handleFileTypes: (type: string) => "csv" | "pdf" | "txt" | "docx"; 
    previews: previewStateType;
} | undefined;

// ===============================================================>
// 👇 NavigationMenu - Types
// ===============================================================>

export type MenuTypes = Array<
    {
        id?: number,
        name?: string,
        link?: string
    }
>

export type NavigationMenuProps = {
    menuItems: MenuTypes, 
    screen: "large" | "small"
}

// ===============================================================>
// 👇 DisplayFile - Types
// ===============================================================>

export type DisplayFileTypes = {
    file: File,
    checkTypes: (type: string) => "csv" | "pdf" | "txt" | "docx",
    progress: number,
    handleRemove: () => void
}

// ===============================================================>
// 👇 Common Types
// ===============================================================>

export type ReactChildrenType = {
    children?: ReactNode
}

// ===============================================================>
// 👇 Modal - Types
// ===============================================================>

export type ModalProps = {
    handleClose?: () => void,
    isOpen?: boolean,
    children?: ReactNode
}

// ===============================================================>
// 👇 useLoaderContext - Types
// ===============================================================>

export type LoaderContextType = {
    loader: boolean, 
    hideLoader: () => void, 
    showLoader: () => void
} | undefined;

// ===============================================================>
// 👇 useThemeContext - Types
// ===============================================================>

export type ThemeContextType = {
    theme: string,
    isLight: boolean, 
    isDark: boolean
    setLightTheme: () => void, 
    setDarkTheme: () => void, 
    toggleTheme: () => void, 
} | undefined;