import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface BrandCategoryAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  accentColor?: string;
  id?: string;
  name?: string;
}

const BRAND_CATEGORY_OPTIONS = [
  'Clothing',
  'Jewelry',
  'Cosmetics',
  'Accessories',
  'Beauty Products',
  'Other',
];

export function BrandCategoryAutocomplete({
  value,
  onChange,
  placeholder = 'Select your brand category...',
  required = false,
  accentColor = '#FF2F92',
  id = 'brand-category-autocomplete',
  name = 'category',
}: BrandCategoryAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Sync inputValue with value prop from parent
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Filter suggestions based on input
  const filteredSuggestions = BRAND_CATEGORY_OPTIONS.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  // Handle suggestion selection
  const handleSelectSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
    onChange(suggestion);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && e.key !== 'ArrowDown') {
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setIsOpen(true);
        setHighlightedIndex((prev) =>
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelectSuggestion(filteredSuggestions[highlightedIndex]);
        } else if (filteredSuggestions.length === 1) {
          handleSelectSuggestion(filteredSuggestions[0]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      default:
        break;
    }
  };

  // Handle click outside
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const highlightedItem = listRef.current.children[highlightedIndex] as HTMLElement;
      if (highlightedItem) {
        highlightedItem.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Input Field */}
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          name={name}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          required={required}
          aria-label="Brand category autocomplete"
          aria-autocomplete="list"
          aria-controls={`${id}-listbox`}
          aria-expanded={isOpen}
          className="w-full px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 focus:border-[#FF2F92] focus:outline-none transition-colors pr-10"
        />
        {/* Chevron Icon */}
        <div
          className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ color: accentColor }}
        >
          <ChevronDown size={18} />
        </div>
      </div>

      {/* Suggestion Dropdown */}
      {isOpen && filteredSuggestions.length > 0 && (
        <ul
          ref={listRef}
          id={`${id}-listbox`}
          role="listbox"
          className="absolute z-50 w-full mt-2 bg-[#0B0B0F] border border-white/10 rounded-[10px] shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              role="option"
              aria-selected={
                highlightedIndex === index || inputValue === suggestion
              }
              className={`px-4 py-3 cursor-pointer transition-colors ${
                highlightedIndex === index
                  ? 'bg-white/10'
                  : 'bg-transparent hover:bg-white/5'
              } ${
                inputValue === suggestion
                  ? 'text-[#FF2F92] font-medium'
                  : 'text-white'
              }`}
              style={{
                backgroundColor:
                  highlightedIndex === index
                    ? `${accentColor}15`
                    : inputValue === suggestion
                      ? `${accentColor}10`
                      : 'transparent',
              }}
              onClick={() => handleSelectSuggestion(suggestion)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      {/* No Results Message */}
      {isOpen && filteredSuggestions.length === 0 && inputValue && (
        <div className="absolute z-50 w-full mt-2 bg-[#0B0B0F] border border-white/10 rounded-[10px] px-4 py-3 text-white/50 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
          No categories found
        </div>
      )}
    </div>
  );
}