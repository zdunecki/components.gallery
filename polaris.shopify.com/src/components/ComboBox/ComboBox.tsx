import React, { useState, useCallback, useRef, useEffect } from 'react';
import styles from './ComboBox.module.scss';

export interface ComboBoxOption {
    value: string;
    label: string;
}

export interface ComboBoxProps {
    options: ComboBoxOption[];
    selectedOptions?: string[];
    onSelectionChange?: (selectedOptions: string[]) => void;
    placeholder?: string;
    label?: string;
    allowMultiple?: boolean;
    className?: string;
    trigger?: React.ReactNode;
}

export function ComboBox({
    options,
    selectedOptions = [],
    onSelectionChange,
    placeholder = 'Search tags',
    label = 'Search tags',
    allowMultiple = true,
    className,
    trigger,
}: ComboBoxProps) {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const [isOptionBeingClicked, setIsOptionBeingClicked] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const lastClickTargetRef = useRef<EventTarget | null>(null);

    const escapeSpecialRegExCharacters = useCallback(
        (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
        [],
    );

    const updateText = useCallback(
        (value: string) => {
            setInputValue(value);

            if (value === '') {
                setFilteredOptions(options);
                return;
            }

            const filterRegex = new RegExp(escapeSpecialRegExCharacters(value), 'i');
            const resultOptions = options.filter((option) =>
                option.label.match(filterRegex),
            );
            setFilteredOptions(resultOptions);
        },
        [options, escapeSpecialRegExCharacters],
    );

    const updateSelection = useCallback(
        (selected: string) => {
            if (!onSelectionChange) return;

            if (allowMultiple) {
                if (selectedOptions.includes(selected)) {
                    onSelectionChange(
                        selectedOptions.filter((option) => option !== selected),
                    );
                } else {
                    onSelectionChange([...selectedOptions, selected]);
                }
            } else {
                onSelectionChange([selected]);
                setIsOpen(false);
            }
        },
        [selectedOptions, onSelectionChange, allowMultiple],
    );

    const handleInputFocus = useCallback(() => {
        setIsOpen(true);
        setFocusedIndex(-1);
    }, []);

    const handleInputBlur = useCallback((e: React.FocusEvent) => {
        // Check if the focus is moving to the popover
        if (popoverRef.current?.contains(e.relatedTarget as Node)) {
            return;
        }
        setIsOpen(false);
        setFocusedIndex(-1);
    }, []);

    // Handle click outside to close popover
    useEffect(() => {
        let isMouseDownInside = false;

        const handleMouseDown = (event: MouseEvent) => {
            const target = event.target as Node;

            // Check if mousedown is inside the popover or trigger
            if (
                triggerRef.current?.contains(target) ||
                popoverRef.current?.contains(target)
            ) {
                isMouseDownInside = true;
            } else {
                isMouseDownInside = false;
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            // Store the last click target
            lastClickTargetRef.current = target;

            // Don't close if an option is being clicked
            if (isOptionBeingClicked) {
                return;
            }

            // Don't close if the mouse was pressed inside
            if (isMouseDownInside) {
                return;
            }

            // Check if the click is within the trigger or popover
            if (
                triggerRef.current?.contains(target) ||
                popoverRef.current?.contains(target)
            ) {
                return; // Don't close if clicking inside
            }

            // Only close if clicking outside both elements
            setIsOpen(false);
            setFocusedIndex(-1);
        };

        if (isOpen) {
            // Listen to both mousedown and click events
            document.addEventListener('mousedown', handleMouseDown, true);
            document.addEventListener('click', handleClickOutside, true);

            return () => {
                document.removeEventListener('mousedown', handleMouseDown, true);
                document.removeEventListener('click', handleClickOutside, true);
            };
        }
    }, [isOpen, isOptionBeingClicked]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setFocusedIndex(prev =>
                prev < filteredOptions.length - 1 ? prev + 1 : 0
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setFocusedIndex(prev =>
                prev > 0 ? prev - 1 : filteredOptions.length - 1
            );
        } else if (e.key === 'Enter' && focusedIndex >= 0) {
            e.preventDefault();
            const selectedOption = filteredOptions[focusedIndex];
            if (selectedOption) {
                updateSelection(selectedOption.value);
            }
        } else if (e.key === 'Escape') {
            setIsOpen(false);
        }
    }, [filteredOptions, focusedIndex, updateSelection]);

    const optionsMarkup =
        filteredOptions.length > 0
            ? filteredOptions.map((option, index) => {
                const { label: optionLabel, value } = option;
                const isSelected = selectedOptions.includes(value);
                const isFocused = index === focusedIndex;

                return (
                    <div
                        key={`${value}`}
                        className={`${styles.option} ${isSelected ? styles.selected : ''} ${isFocused ? styles.focused : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsOptionBeingClicked(true);
                            updateSelection(value);
                            // Reset the flag after a short delay
                            setTimeout(() => setIsOptionBeingClicked(false), 100);
                        }}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsOptionBeingClicked(true);
                        }}
                        onMouseEnter={() => setFocusedIndex(index)}
                    >
                        <div className={styles.optionContent}>
                            <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setIsOptionBeingClicked(true);
                                    updateSelection(value);
                                    // Reset the flag after a short delay
                                    setTimeout(() => setIsOptionBeingClicked(false), 100);
                                }}
                                className={styles.checkbox}
                            />
                            <span className={styles.optionLabel}>{optionLabel}</span>
                        </div>
                    </div>
                );
            })
            : null;

    return (
        <div className={`${styles.ComboBox} ${className || ''} ${isOpen ? styles.open : ''}`}>
            {/* Trigger Button */}
            <div ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                {trigger}
            </div>

            {/* Popover */}
            {isOpen && (
                <>
                    {/* Backdrop to catch clicks outside */}
                    <div
                        className={styles.backdrop}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsOpen(false);
                            setFocusedIndex(-1);
                        }}
                    />
                    <div
                        ref={popoverRef}
                        className={styles.popover}
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search Input */}
                        <div
                            className={styles.searchContainer}
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            <div className={styles.searchIcon}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                className={styles.searchInput}
                                value={inputValue}
                                onChange={(e) => updateText(e.target.value)}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                onKeyDown={handleKeyDown}
                                onMouseDown={(e) => e.stopPropagation()}
                                placeholder={placeholder}
                                autoComplete="off"
                                aria-label={label}
                            />
                        </div>

                        {/* Options List */}
                        {filteredOptions.length > 0 && (
                            <div
                                className={styles.optionsList}
                                onMouseDown={(e) => e.stopPropagation()}
                            >
                                {optionsMarkup}
                            </div>
                        )}

                        {/* Selected Tags Display */}
                        {selectedOptions.length > 0 && (
                            <div className={styles.selectedTags}>
                                <p>Selected tags: {selectedOptions.join(', ')}</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default ComboBox;
