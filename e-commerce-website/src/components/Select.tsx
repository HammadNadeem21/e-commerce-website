import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo(props:{name:string}) {
  return (
    <Select>
      <SelectTrigger className="sm:w-[130px] w-[90px]">
        <SelectValue placeholder={props.name} className="text-[16px]"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>dummy</SelectLabel>
          <SelectItem value="dummy1">dummy1</SelectItem>
          <SelectItem value="dummy2">dummy2</SelectItem>
          <SelectItem value="dummy3">dummy3</SelectItem>
          <SelectItem value="dummy4">dummy4</SelectItem>
          <SelectItem value="dummy5">dummy5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
