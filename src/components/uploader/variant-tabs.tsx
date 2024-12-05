import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { BasicUploaderDemo } from "./basic-uploader-demo"
import { DialogUploaderDemo } from "./dialog-uploader-demo"
import { ReactHookFormDemo } from "./react-hook-form-demo"

export function VariantTabs() {
  return (
    <Tabs defaultValue="basic" className="w-full overflow-hidden">
      <TabsContent value="basic" className="mt-6">
        <BasicUploaderDemo />
      </TabsContent>
    </Tabs>
  )
}
