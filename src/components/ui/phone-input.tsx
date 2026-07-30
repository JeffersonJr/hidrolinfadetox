import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import * as RPNInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type PhoneInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void
  }

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> = React.forwardRef<
  React.ElementRef<typeof RPNInput.default>,
  PhoneInputProps
>(({ className, onChange, ...props }, ref) => {
  return (
    <RPNInput.default
      ref={ref}
      className={cn("flex items-center w-full mt-2 border-b border-border focus-within:border-gold transition-colors", className)}
      flagComponent={FlagComponent}
      countrySelectComponent={CountrySelect}
      inputComponent={InputComponent}
      onChange={(value) => onChange?.(value || ("" as any))}
      {...props}
    />
  )
})
PhoneInput.displayName = "PhoneInput"

const InputComponent = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      className={cn("flex-1 bg-transparent py-3 px-3 text-sm font-medium text-foreground outline-none border-none", className)}
      {...props}
      ref={ref}
    />
  )
)
InputComponent.displayName = "InputComponent"

type CountrySelectOption = { label: string; value: RPNInput.Country }
type CountrySelectProps = {
  disabled?: boolean
  value: RPNInput.Country
  onChange: (value: RPNInput.Country) => void
  options: CountrySelectOption[]
}

const CountrySelect = ({ disabled, value, onChange, options }: CountrySelectProps) => {
  const [open, setOpen] = React.useState(false)

  const handleSelect = React.useCallback(
    (country: RPNInput.Country) => {
      onChange(country)
      setOpen(false)
    },
    [onChange]
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={cn("flex items-center gap-1.5 py-3 pr-3 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity border-r border-border/50")}
        >
          <FlagComponent country={value} countryName={value} />
          <span className="text-xs font-semibold text-muted-foreground mr-1">
            {value && `+${RPNInput.getCountryCallingCode(value)}`}
          </span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Procurar país..." />
          <CommandList>
            <CommandEmpty>País não encontrado.</CommandEmpty>
            <CommandGroup>
              {options
                .filter((x) => x.value)
                .map((option) => (
                  <CommandItem
                    className="gap-2 cursor-pointer"
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <FlagComponent country={option.value} countryName={option.label} />
                    <span className="flex-1 text-sm">{option.label}</span>
                    {option.value && (
                      <span className="text-sm text-muted-foreground">
                        +{RPNInput.getCountryCallingCode(option.value)}
                      </span>
                    )}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4 text-gold",
                        option.value === value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country]
  return (
    <span className="bg-foreground/10 flex h-[14px] w-[20px] overflow-hidden rounded-[2px] shadow-sm">
      {Flag && <Flag title={countryName} />}
    </span>
  )
}

export { PhoneInput }
