import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Icon } from '@shopify/polaris';
import * as polarisIcons from '@shopify/polaris-icons';
import icons from '../../icons';
import { className } from '../../utils/various';
import styles from './Subnav.module.scss';

type PolarisIcon = keyof typeof polarisIcons;

interface SubnavItemProps {
    /** The content to display inside the item */
    children: ReactNode;
    /** The URL the item links to - optional for non-navigable items */
    href?: string;
    /** Whether the item is currently active */
    active?: boolean;
    /** Icon to display before the text */
    icon?: PolarisIcon | string;
    /** Additional CSS classes */
    className?: string;
    /** Whether to use Next.js Link or regular anchor */
    external?: boolean;
    /** Click handler for items without href */
    onClick?: () => void;
}

function SubnavItem({
    children,
    href,
    active = false,
    icon,
    className: customClassName,
    external = false,
    onClick,
}: SubnavItemProps) {
    const injectedPolarisIcons = { ...polarisIcons, ...icons };

    const itemContent = (
        <>
            {icon && (
                <div>
                    <Icon
                        source={
                            typeof icon === 'string' && icon in injectedPolarisIcons
                                ? injectedPolarisIcons[icon as PolarisIcon]
                                : typeof icon === 'function' ? icon : injectedPolarisIcons.Polaris
                        }
                    />
                </div>
            )}
            {children}
        </>
    );

    const itemClassName = className(
        styles.Item,
        active && styles['Item--active'],
        customClassName
    );

    // If no href is provided, render as a clickable item with onClick
    if (!href) {
        return (
            <button
                className={itemClassName}
                onClick={onClick}
                type="button"
            >
                {itemContent}
            </button>
        );
    }

    if (external) {
        return (
            <a
                className={itemClassName}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {itemContent}
            </a>
        );
    }

    return (
        <Link className={itemClassName} href={href}>
            {itemContent}
        </Link>
    );
}

interface SubnavProps {
    /** The content to display inside the subnav */
    children: ReactNode;
    /** Array of active item URLs to highlight */
    activeItems?: string[];
    /** Additional CSS classes */
    className?: string;
}

function Subnav2({ children, activeItems = [], className: customClassName }: SubnavProps) {
    return (
        <nav className={className(styles.Subnav, customClassName)}>
            <ul className={styles.Items}>
                {children}
            </ul>
        </nav>
    );
}

// Attach Item as a static property
Subnav2.Item = SubnavItem;

export { Subnav2 };
export type { SubnavProps, SubnavItemProps };
