import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactFormDialog({ open, onOpenChange }: ContactFormDialogProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Handle form submission
    console.log("Form submitted:", formData);
    toast.success("Your consultation request has been submitted!");
    
    // Reset form and close dialog
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-5xl p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Side - Info */}
          <div className="bg-gray-100 p-8 md:p-12">
            <p className="text-xs text-gray-600 tracking-widest mb-4">GET IN TOUCH</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Ready to Get Free<br />Consultation?
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address Business</h3>
                <p className="text-gray-600 text-sm">
                  Gulistan e Johar, Near Dubai Palace,<br />
                  Karachi, Pakistan
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">alfatahdentalcare@gmail.com</p>
                <p className="text-gray-600 text-sm"> 0335 2241333 | 0328 1310716</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get Free Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-gray-50"
                  required
                />
                <Input
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-gray-50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-50"
                  required
                />
                <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                  <SelectTrigger className="bg-gray-50">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="appointment">Appointment</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Write message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-gray-50 min-h-[100px]"
                required
              />

              <Button 
                type="submit" 
                className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-md py-6 text-base font-medium"
              >
                Get Consultation →
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
