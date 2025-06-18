
CREATE TABLE form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  data JSONB NOT NULL,
  submitted_at TIMESTAMP DEFAULT now()
);
